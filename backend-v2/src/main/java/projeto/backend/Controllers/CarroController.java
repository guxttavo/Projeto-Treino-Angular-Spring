package projeto.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.backend.Entities.*;
import projeto.backend.Services.CarroService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/carro")
public class CarroController {

    @Autowired
    private CarroService carroService;

    @PostMapping("/cadastrarCarro")
    public ResponseEntity<Carro> cadastrarCarro(@RequestBody Carro carro) {
        Optional<Carro> carroExistente = carroService.buscarCarroPorPlaca(carro.getPlaca());

        if (carroExistente.isEmpty()) {
            return ResponseEntity.ok(carroService.cadastrarCarro(carro));
        }

        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/deletarCarro/{id}")
    public ResponseEntity<Optional<Carro>> deletarCarro(@PathVariable Long id){
        Optional<Carro> carroExistente = carroService.buscarCarroPorId(id);
        
        if(carroExistente.isEmpty()){
            return ResponseEntity.ok(carroService.deletarCarro(id));
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/listarCategoria")
    public ResponseEntity<List<Categoria>> listarCategoria() {
        List<Categoria> categorias = carroService.listarCategoria();
        return ResponseEntity.ok(categorias);
    }

    @GetMapping("/listarCor")
    public ResponseEntity<List<Cor>> listarCor() {
        List<Cor> cores = carroService.listarCor();
        return ResponseEntity.ok(cores);
    }

    @GetMapping("/listarFabricante")
    public ResponseEntity<List<Fabricante>> listarFabricante() {
        List<Fabricante> fabricantes = carroService.listarFabricante();
        return ResponseEntity.ok(fabricantes);
    }

    @GetMapping("/listarCombustivel")
    public ResponseEntity<List<Combustivel>> listarCombustivel() {
        List<Combustivel> tiposDeCombustiveis = carroService.listarCombustivel();
        return ResponseEntity.ok(tiposDeCombustiveis);
    }

    @GetMapping("/listarCarro")
    public ResponseEntity<List<Carro>> listarCarro(){
        List<Carro> listaDeCarros = carroService.listarCarro();
        return  ResponseEntity.ok(listaDeCarros);
    }
}
