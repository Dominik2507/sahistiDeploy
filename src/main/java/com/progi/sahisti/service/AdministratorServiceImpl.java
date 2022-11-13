package com.progi.sahisti.service;

import com.progi.sahisti.model.Administrator;
import com.progi.sahisti.repository.AdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdministratorServiceImpl implements AdministratorService {

    @Autowired
    private AdministratorRepository administratorRepository;

    @Override
    public List<Administrator> getAllAdministrator() {
        return administratorRepository.findAll();
    }

    @Override
    public Optional<Administrator> getAdminById(long id) {
        return administratorRepository.findById(id);
    }

}
