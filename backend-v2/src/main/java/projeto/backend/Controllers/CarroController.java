package projeto.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import projeto.backend.Entities.Categoria;
import projeto.backend.Services.CarroService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carro")
public class CarroController {

    @Autowired
    private CarroService carroService;

    @GetMapping("/categoria")
    public List<Categoria> buscarCategoria(@RequestParam String nome){
        return carroService.buscarCategoriaPorNome(nome);
    }
}
