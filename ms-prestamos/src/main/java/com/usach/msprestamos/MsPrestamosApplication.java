package com.usach.msprestamos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
@EnableFeignClients
@EnableKafka
public class MsPrestamosApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsPrestamosApplication.class, args);
	}

}
