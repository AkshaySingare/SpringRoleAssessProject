package com.example.roleBaseAcess.repository;

import com.example.roleBaseAcess.model.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SignUpRepo extends JpaRepository<SignUp,Integer> {
    Optional<SignUp> findByEmailAndPasswordAndRole(String email,String password,String role);
}
