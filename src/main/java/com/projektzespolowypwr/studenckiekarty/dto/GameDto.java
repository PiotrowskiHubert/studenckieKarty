package com.projektzespolowypwr.studenckiekarty.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class GameDto {
    String name;
    String description;
}
