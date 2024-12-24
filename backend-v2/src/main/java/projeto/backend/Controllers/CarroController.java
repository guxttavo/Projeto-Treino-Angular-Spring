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

    @PutMapping("/editarCarro/{id}")
    public ResponseEntity<Carro> editarCarro(@PathVariable Long id, @RequestBody Carro carro) {
        Optional<Carro> carroExistente = carroService.buscarCarroPorId(id);

        if (carroExistente.isPresent()) {
            Carro carroEditado = carroExistente.get();

            // Atualizando os campos do carro existente com os valores do carro recebido no request
            carroEditado.setNome(carro.getNome());
            carroEditado.setAno(carro.getAno());
            carroEditado.setQuilometragem(carro.getQuilometragem());
            carroEditado.setValorBruto(carro.getValorBruto());
            carroEditado.setConcessionaria(carro.getConcessionaria());
            carroEditado.setPlaca(carro.getPlaca());
            carroEditado.setDono(carro.getDono());
            carroEditado.setValorLiquido(carro.getValorLiquido());
            carroEditado.setObservacoes(carro.getObservacoes());
            carroEditado.setUsuario(carro.getUsuario());
            carroEditado.setCategoria(carro.getCategoria());
            carroEditado.setCor(carro.getCor());
            carroEditado.setFabricante(carro.getFabricante());
            carroEditado.setCombustivel(carro.getCombustivel());

            // Salvando as alterações
            Carro carroAtualizado = carroService.cadastrarCarro(carroEditado);

            return ResponseEntity.ok(carroAtualizado);
        }

        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/deletarCarro/{id}")
    public ResponseEntity<Optional<Carro>> deletarCarro(@PathVariable Long id) {
        Optional<Carro> carroExistente = carroService.buscarCarroPorId(id);

        if (carroExistente.isPresent()) {
            carroService.deletarCarro(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/listarCarro")
    public ResponseEntity<List<Carro>> listarCarro() {
        List<Carro> listaDeCarros = carroService.listarCarro();
        return ResponseEntity.ok(listaDeCarros);
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
        List<Combustivel> combustiveis = carroService.listarCombustivel();
        return ResponseEntity.ok(combustiveis);
    }

    @GetMapping("/buscarCarroPorId/{id}")
    public ResponseEntity<Optional<Carro>> buscarCarroPorId(@PathVariable Long id) {
        Optional<Carro> carro = carroService.buscarCarroPorId(id);

        return ResponseEntity.ok(carro);
    }

}
