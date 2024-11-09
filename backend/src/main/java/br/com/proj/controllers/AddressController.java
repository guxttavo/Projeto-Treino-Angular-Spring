package br.com.proj.controllers;

import br.com.proj.entities.User;
import br.com.proj.services.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/address")
public class AddressController {

    private final AddressService addressService;

    @GetMapping("/consult")
    public ResponseEntity consultaCep(@RequestBody User address) {
        return ResponseEntity.ok(addressService.execute(address));

    }
}
