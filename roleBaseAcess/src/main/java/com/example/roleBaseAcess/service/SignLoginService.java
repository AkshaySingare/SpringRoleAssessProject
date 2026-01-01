package com.example.roleBaseAcess.service;

import com.example.roleBaseAcess.model.SignUp;
import com.example.roleBaseAcess.repository.SignUpRepo;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignLoginService {

    @Autowired
    private SignUpRepo signUpRepo;


    public @Nullable SignUp addRole(SignUp signUp) {
        return signUpRepo.save(signUp);
    }

    public @Nullable Optional<SignUp> login(SignUp sign) {
      return signUpRepo.findByEmailAndPasswordAndRole(sign.getEmail(),sign.getPassword(),sign.getRole());

    }
}
