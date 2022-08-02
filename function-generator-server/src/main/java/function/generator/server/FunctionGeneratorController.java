package function.generator.server;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunctionGeneratorController {

	private static double x=0;
	
	@GetMapping("/sin")
	ResponseEntity<FunctionGenerator> getSin() {

		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Access-Control-Allow-Origin", "*");
		responseHeaders.add("Access-Control-Allow-Methods", "GET");
		responseHeaders.add("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");

		FunctionGenerator fg = new FunctionGenerator();
		
		fg.setX(x+=0.1);
		fg.setSin(Math.sin(x/10));
		fg.setCos(Math.cos(x));
		fg.setTan(Math.tan(x));

		return new ResponseEntity<FunctionGenerator>(fg, responseHeaders, HttpStatus.CREATED);

	}

}
