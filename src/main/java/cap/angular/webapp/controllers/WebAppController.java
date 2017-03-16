package cap.angular.webapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import cap.angular.webapp.services.WebAppService;

@RestController
public class WebAppController {

    @Autowired
    WebAppService webAppService;

    @RequestMapping("/api/capInvoices")
    public String capInvoices() {
        return webAppService.getJsonData();
    }
}
