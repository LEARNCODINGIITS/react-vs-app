package com.iits.onlineapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExcepiton extends RuntimeException {

	
	public ResourceNotFoundExcepiton(String message) {
		super(message);
	}
}
