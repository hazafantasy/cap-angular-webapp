package cap.angular.webapp;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class WebAppController {
    
    @RequestMapping("/api/capInvoices")
    public String capInvoices() {
        return "{\"id\":1,\"content\":\"Hello, World!\"}";
    }

}
