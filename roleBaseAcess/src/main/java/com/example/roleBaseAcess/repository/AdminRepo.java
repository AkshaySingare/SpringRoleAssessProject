package com.example.roleBaseAcess.repository;

import com.example.roleBaseAcess.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepo extends JpaRepository<Products,Integer> {
    List<Products> findByNameContainingIgnoreCase(String name);
}
