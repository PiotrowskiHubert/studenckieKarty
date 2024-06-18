package com.projektzespolowypwr.studenckiekarty.service;

import com.projektzespolowypwr.studenckiekarty.dto.GameDto;
import com.projektzespolowypwr.studenckiekarty.entity.Game;
import com.projektzespolowypwr.studenckiekarty.repository.IGameRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
public class JpaGameService implements IGameService {

    private final IGameRepository gameRepository;

    public JpaGameService(IGameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    public void add(GameDto gameDto) {
        final Game game = Game.builder()
                .name(gameDto.getName())
                .description(gameDto.getDescription())
                .build();
        gameRepository.save(game);
    }

    @Override
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }
}
