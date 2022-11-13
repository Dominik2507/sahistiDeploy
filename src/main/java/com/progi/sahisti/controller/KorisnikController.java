package com.progi.sahisti.controller;

import com.progi.sahisti.model.Administrator;
import com.progi.sahisti.model.Clan;
import com.progi.sahisti.model.Korisnik;
import com.progi.sahisti.model.Trener;
import com.progi.sahisti.service.AdministratorService;
import com.progi.sahisti.service.ClanService;
import com.progi.sahisti.service.KorisnikService;
import com.progi.sahisti.service.TrenerService;
import com.progi.sahisti.utils.FetchBodyData;
import com.progi.sahisti.utils.LoginCredentials;
import com.progi.sahisti.utils.ResponseBody;
import com.progi.sahisti.utils.UserInfo;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/")
public class KorisnikController {

    @Autowired
    private KorisnikService korisnikService;

    @Autowired
    AdministratorService administratorService;
    @Autowired
    TrenerService trenerService;
    @Autowired
    ClanService clanService;

    @PostMapping("/prijava")
    public ResponseEntity<ResponseBody> login(@RequestBody LoginCredentials loginCreds, HttpServletRequest req) {
        System.out.println("Requested user..." + loginCreds.toString());
        Korisnik res = korisnikService.getKorisnikByKorisnickoIme(loginCreds.getUsername());

        if(!loginCreds.getPassword().equals(res.getLozinka())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        System.out.println(req.getSession().getId());
        req.getSession().setAttribute("osobaId", res.getOsobaID());
        req.getSession().setAttribute("uloga", res.getUloga());

        return ResponseEntity.ok(new ResponseBody(req.getSession().getId(),
                                                    String.valueOf(res.getOsobaID()),
                                                    res.getUloga()));
    }



    // Ovdje ce mozda trebat mijenjat sta funkcija vraca i URL sa kojeg se radi fetch() i mozda dodat da se session izbrise iz baze preko sessionId
    @PostMapping("profil/odjava")
    public String logout(HttpServletRequest req) {

        req.getSession().invalidate();

        return "/";
    }

    @PostMapping("/profil")
    public ResponseEntity<UserInfo> getAdminData(@RequestBody FetchBodyData data) {
        System.out.println(data);
        if(data.getRole().equals("admin")) {
            Administrator admin = administratorService.getAdminById(Long.valueOf(data.getUserId())).get();
            UserInfo userInfo = new UserInfo(admin.getIme(), admin.getPrezime(), "null", "null", "null");
            System.out.println(userInfo);
            return ResponseEntity.ok(userInfo);
        } else if (data.getRole().equals("trener")) {
            Trener trener = trenerService.getTrenerById(Long.valueOf(data.getUserId())).get();
            return ResponseEntity.ok(new UserInfo(trener.getIme(), trener.getPrezime(), trener.getTitula(), "null", "null"));
        } else if (data.getRole().equals("clan")) {
            Clan clan = clanService.getClanById(Long.valueOf(data.getUserId())).get();
            return ResponseEntity.ok(new UserInfo(clan.getIme(), clan.getPrezime(), "null", clan.getClanOd().toString().split(" ")[0], String.valueOf(clan.getBodovi())));
        }
        return null;
    }

}
