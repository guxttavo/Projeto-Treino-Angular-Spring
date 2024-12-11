package projeto.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projeto.backend.Entities.Categoria;
import projeto.backend.Entities.Cor;
import projeto.backend.Entities.Marca;
import projeto.backend.Entities.TipoDeCombustivel;
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

    @GetMapping("/marca")
    public ResponseEntity<List<Marca>> buscarMarcas() {
        List<Marca> marcas = carroService.buscarMarcas();
        return ResponseEntity.ok(marcas);
    }

   @GetMapping("/tipoDeCombustivel")
    public ResponseEntity<List<TipoDeCombustivel>> buscarTiposDeCombustiveis() {
        List<TipoDeCombustivel> tiposDeCombustiveis = carroService.buscarTipoDeCombustive();
        return ResponseEntity.ok(tiposDeCombustiveis);
    }



}