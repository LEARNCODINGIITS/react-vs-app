package com.iits.onlineapp.service;

import java.util.List;

import com.iits.onlineapp.dto.ProductDTO;

public interface ProductService {

public ProductDTO createProduct(ProductDTO productdto);
public ProductDTO getProductById(int productId);
public List<ProductDTO> getAllProducts();
public ProductDTO updateProduct(int productId,ProductDTO productDTO);
public void deleteProduct(int productId);
}
