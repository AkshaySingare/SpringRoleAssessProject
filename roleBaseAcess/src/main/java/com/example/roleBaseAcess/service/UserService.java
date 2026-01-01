package com.example.roleBaseAcess.service;

import com.example.roleBaseAcess.model.SignUp;
import com.example.roleBaseAcess.repository.AdminRepo;
import com.example.roleBaseAcess.model.Products;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private AdminRepo adminRepo;


    public List<Products> showProduct() {
        return adminRepo.findAll();
    }

    public @Nullable List<Products> searchByName(String name) {
        return adminRepo.findByNameContainingIgnoreCase(name);
    }


    public @Nullable Products productById(int id) {
        return adminRepo.findById(id).orElse(new Products());
    }
}
