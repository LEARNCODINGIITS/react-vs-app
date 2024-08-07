package com.iits.onlineapp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.iits.onlineapp.dto.ProductDTO;
import com.iits.onlineapp.entity.Product;
import com.iits.onlineapp.exception.ResourceNotFoundExcepiton;
import com.iits.onlineapp.mapper.ProductMapper;
import com.iits.onlineapp.repository.ProductRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

	ProductRepository productRepository;

	@Override
	public ProductDTO createProduct(ProductDTO productdto) {
		Product product = ProductMapper.mapToProduct(productdto);
		Product saveProduct = this.productRepository.save(product);
		return ProductMapper.mapToProductDto(saveProduct);
	}

	@Override
	public ProductDTO getProductById(int productId) {
		Product product = this.productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundExcepiton("Product Not Found!"));
		ProductDTO pdto = ProductMapper.mapToProductDto(product);

		return pdto;
	}

	@Override
	public List<ProductDTO> getAllProducts() {
		List<Product> products = this.productRepository.findAll();

		List<ProductDTO> pdto = products.stream().map((product) -> ProductMapper.mapToProductDto(product))
				.collect(Collectors.toList());

		return pdto;
	}

	@Override
	public ProductDTO updateProduct(int productId, ProductDTO productDTO) {
		Product product = this.productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundExcepiton("Product is Not Found"));
		System.out.println("--->"+product);
		product.setPname(productDTO.getPname());
		product.setPrice(productDTO.getPrice());

		Product saveProduct=this.productRepository.save(product);
		System.out.println("-->"+saveProduct);
		return ProductMapper.mapToProductDto(saveProduct);
	}

	@Override
	public void deleteProduct(int productId) {
		Product product = this.productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundExcepiton("Product is Not Found"));
		this.productRepository.deleteById(productId);
	}

}
