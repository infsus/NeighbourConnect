package hr.fer.zpr.infsus.nec.rest.v1.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<Void> login() {
        return ResponseEntity.ok().build();
    }
}
