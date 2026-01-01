package com.example.roleBaseAcess.controller;

import com.example.roleBaseAcess.model.Products;
import com.example.roleBaseAcess.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173/")
public class AdminController {

    @Autowired
    private AdminService adminService;

//    @PostMapping("/addProduct")
//    public ResponseEntity<Products> addProduct(@RequestBody Products product){
//        return ResponseEntity.status(HttpStatus.CREATED).body(adminService.addProduct(product));
//    }
@PostMapping(value = "/addProduct", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<Products> addProduct(
        @RequestPart("product") Products product,
        @RequestPart("image") MultipartFile image) throws IOException {

    Products savedProduct = adminService.addProduct(product, image);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
}


    @PutMapping("/updateProduct")
    public ResponseEntity<Products> updateProduct(@RequestBody Products product){
        return ResponseEntity.status(HttpStatus.CREATED).body(adminService.updateProduct(product));
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") int id){
        adminService.delteProdct(id);
        return new ResponseEntity<>("Deleted...",HttpStatus.OK);
    }

    @GetMapping("/products")
    public ResponseEntity<List<Products>> showproduct(){
        return ResponseEntity.ok().body(adminService.showProduct());
    }

    @GetMapping("/searchByName/{name}")
    public ResponseEntity<List<Products>> seearchProductByName(@PathVariable("name") String name){
        return ResponseEntity.ok().body(adminService.searchName(name));
    }


}
