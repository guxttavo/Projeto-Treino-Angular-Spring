package projeto.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.backend.Entities.*;
import projeto.backend.Services.CarroService;

import java.util.List;

@RestController
@RequestMapping("/carro")
public class CarroController {

    @Autowired
    private CarroService carroService;

    @GetMapping("/categoria")
    public ResponseEntity<List<Categoria>> buscarCategorias() {
        List<Categoria> categorias = carroService.buscarCategorias();
        return ResponseEntity.ok(categorias);
    }

    @GetMapping("/cor")
    public ResponseEntity<List<Cor>> buscarCores() {
        List<Cor> cores = carroService.buscarCores();
        return ResponseEntity.ok(cores);
    }

    @GetMapping("/fabricante")
    public ResponseEntity<List<Fabricante>> buscarMarcas() {
        List<Fabricante> fabricantes = carroService.buscarMarcas();
        return ResponseEntity.ok(fabricantes);
    }

    @GetMapping("/tipoDeCombustivel")
    public ResponseEntity<List<Combustivel>> buscarTiposDeCombustiveis() {
        List<Combustivel> tiposDeCombustiveis = carroService.buscarTipoDeCombustive();
        return ResponseEntity.ok(tiposDeCombustiveis);
    }

    @PostMapping("/cadastrarCarro")
    public ResponseEntity<Carro> cadastrarCarro(@RequestBody Carro carro) {
        Carro carroExistente = carroService.buscarCarroPorPlaca(carro.getPlaca());

        if (carroExistente == null) {
            return ResponseEntity.ok(carroService.cadastrarCarro(carro));
        }

        return ResponseEntity.badRequest().build();
    }
}
