package com.projektzespolowypwr.studenckiekarty.config;

import com.projektzespolowypwr.studenckiekarty.service.UserDetailService;
import org.hibernate.ObjectNotFoundException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.util.Optional;

import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    private final UserDetailService userDetailService;

    public SecurityConfiguration(UserDetailService userDetailService) {
        this.userDetailService = userDetailService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .headers(
                        (headers) -> {
                            headers.disable();
                            headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable);
                        }
                )
                .formLogin(
                        withDefaults()
                )
                .logout(log-> log
                        .logoutSuccessUrl("/nav/v1/home")
                        .deleteCookies("JSESSIONID")
                        .invalidateHttpSession(true)
                )
                .authorizeHttpRequests((aut)->
                        aut
                                .requestMatchers("/games/v1/**").hasRole("USER")
                                .requestMatchers("/nav/v1/myProfile").hasRole("USER")
                                .requestMatchers(toH2Console()).permitAll()
                                .anyRequest().permitAll()
                )
                .formLogin(formLogin ->
                        formLogin
                                .successHandler(authenticationSuccessHandler())
                )
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(toH2Console())
                        .disable()
                )
                .sessionManagement(session -> session
                        .sessionFixation().migrateSession())
                .rememberMe(rememberMe -> rememberMe
                        .key("uniqueAndSecret")
                        .rememberMeCookieName("remember-me-cookie")
                        .tokenValiditySeconds(7*24*60*60)
                        .userDetailsService(userDetailsService())
                )
                .httpBasic(withDefaults());


        return http
                .build();
    }

    @Bean
    public AuthenticationSuccessHandler authenticationSuccessHandler() {
        return new UrlAuthenticationSuccessHandler();
    }
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return   http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailService)
                .passwordEncoder(passwordEncoder())
                .and()
                .build();

    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(){
        return username -> {
            try{
                return userDetailService.loadUserByUsername(username);
            }catch (Exception e){
                throw new ObjectNotFoundException(Optional.ofNullable(username), "User not found");
            }
        };
    }
}
