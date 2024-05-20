package com.projektzespolowypwr.studenckiekarty;

import com.projektzespolowypwr.studenckiekarty.entity.User;
import com.projektzespolowypwr.studenckiekarty.repository.IUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class StudenckieKartyApplication implements CommandLineRunner {

    private final IUserRepository userRepository;

    public StudenckieKartyApplication(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(StudenckieKartyApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        final User user = userRepository.save(User.builder()
                .username("user")
                .nickName("user")
                .password(new BCryptPasswordEncoder().encode("user"))
                .role("ROLE_USER")
                .enabled(true)
                .build()
        );
    }
}
