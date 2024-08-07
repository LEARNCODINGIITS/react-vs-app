package com.iits.onlineapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.iits.onlineapp.dto.ProductDTO;
import com.iits.onlineapp.dto.Welcome;
import com.iits.onlineapp.service.ProductService;

import lombok.AllArgsConstructor;
import lombok.Delegate;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController {

	ProductService productService;

	@GetMapping("/welcome")
	public ResponseEntity<String> welcome(){
		return ResponseEntity.ok("WELCOME TO HOME PAGE");
	}
	
	@PostMapping
	public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO product) {
		ProductDTO saveProduct = this.productService.createProduct(product);
		return new ResponseEntity<>(saveProduct, HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<ProductDTO> getProductById(@PathVariable("id") int id){
		ProductDTO pdto=this.productService.getProductById(id);
		return ResponseEntity.ok(pdto);
	}
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> getAllProducts(){
		List<ProductDTO> list=this.productService.getAllProducts();
		
		return ResponseEntity.ok(list);
	}

	
	@PutMapping("{id}")
	public ResponseEntity<ProductDTO> updateProduct(@PathVariable("id") int id, @RequestBody ProductDTO productDTO)
	{
		System.out.println("----->"+productDTO);
		ProductDTO pdto=this.productService.updateProduct(id, productDTO);
		return ResponseEntity.ok(pdto);
	}
	
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") int id){
			this.productService.deleteProduct(id);
		return ResponseEntity.ok("SUCCESSFULLY DELETED");
	}
	
	
}
