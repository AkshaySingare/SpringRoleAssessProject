package com.example.roleBaseAcess.service;

import com.example.roleBaseAcess.repository.AdminRepo;
import com.example.roleBaseAcess.model.Products;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    public @Nullable List<Products> showProduct() {
        return adminRepo.findAll();
    }

//    public @Nullable Products addProduct(Products product, MultipartFile image) {
//        return adminRepo.save(product);
//    }
private static final String UPLOAD_DIR = "uploads/";

    public Products addProduct(Products product, MultipartFile image) throws IOException, IOException {

        if (image != null && !image.isEmpty()) {

            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
            Path path = Paths.get(UPLOAD_DIR + fileName);
            Files.write(path, image.getBytes());

            // store image path in DB
            product.setImagePath(fileName);
        }

        return productRepository.save(product);
    }

    public @Nullable Products updateProduct(Products product) {
        return adminRepo.save(product);
    }

    public void delteProdct(int id) {
        adminRepo.deleteById(id);
    }

    public @Nullable List<Products> searchName(String name) {
        return adminRepo.findByNameContainingIgnoreCase(name);
    }
}
