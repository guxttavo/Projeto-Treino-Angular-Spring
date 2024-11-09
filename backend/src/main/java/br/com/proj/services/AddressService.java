package br.com.proj.services;

import br.com.proj.entities.AddressResponse;
import br.com.proj.entities.User;
import br.com.proj.infra.AddressFeign;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AddressService {

    private final AddressFeign addressFeign;

    public AddressResponse execute(User request) {
        return addressFeign.findAddressCep(request.getCep());
    }
}