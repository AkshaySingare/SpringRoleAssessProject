package com.example.roleBaseAcess.controller;

import com.example.roleBaseAcess.model.Products;
import com.example.roleBaseAcess.model.SignUp;
import com.example.roleBaseAcess.repository.SignUpRepo;
import com.example.roleBaseAcess.service.SignLoginService;
import com.example.roleBaseAcess.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    private SignLoginService signLoginService;

    @PostMapping("/signup")
    public ResponseEntity<SignUp> signUp(@RequestBody SignUp signUp){
        System.out.println(signUp+"\n");
        return ResponseEntity.ok().body(signLoginService.addRole(signUp));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody SignUp sign) {

        Optional<SignUp> user = signLoginService.login(sign);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get()); // 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password or role");
        }
    }


    @Autowired
    private UserService userService;

    @GetMapping("/productById/{id}")
    public ResponseEntity<Products> fetchProductById(@PathVariable("id") int id){
        return ResponseEntity.ok().body(userService.productById(id));
    }
    @GetMapping("/user/showProduct")
    public ResponseEntity<List<Products>> showProducts(){
        return ResponseEntity.ok().body(userService.showProduct());
    }
    @GetMapping("/user/searchProduct/{name}")
    public ResponseEntity<List<Products>> searchByName(@PathVariable("name") String name){
        return ResponseEntity.ok().body(userService.searchByName(name));
    }

}
