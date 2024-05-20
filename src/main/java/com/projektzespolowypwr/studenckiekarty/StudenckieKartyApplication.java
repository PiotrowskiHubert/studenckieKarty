package com.projektzespolowypwr.studenckiekarty;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudenckieKartyApplication implements CommandLineRunner {

    private final IUserRepository userRepository;

    public StudenckieKartyApplication(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(StudenckieKartyApplication.class, args);
    }

}
