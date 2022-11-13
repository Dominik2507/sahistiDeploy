package com.progi.sahisti.service;

import com.progi.sahisti.model.Administrator;

import java.util.List;
import java.util.Optional;

public interface AdministratorService {

    List<Administrator> getAllAdministrator();

    Optional<Administrator> getAdminById(long id);

}
