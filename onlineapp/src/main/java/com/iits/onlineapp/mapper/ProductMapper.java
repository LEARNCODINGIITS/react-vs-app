package com.iits.onlineapp.mapper;

import com.iits.onlineapp.dto.ProductDTO;
import com.iits.onlineapp.entity.Product;

public class ProductMapper {

	public static ProductDTO mapToProductDto(Product product) {
		return new ProductDTO(product.getPid(), product.getPname(), product.getPrice());
	}

	public static Product mapToProduct(ProductDTO productDTO) {
		return new Product(productDTO.getPid(), productDTO.getPname(), productDTO.getPrice());
	}

}
