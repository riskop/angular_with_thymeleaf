package pack;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    
    Logger log = LoggerFactory.getLogger(HelloController.class);
    
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        log.info("this is info level log!");
        log.debug("this is debug level log!");
        model.addAttribute("name", name);
        return "hello";
    }

    @RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
    @ResponseBody
    public String sendEmailPost(@RequestBody SendEmailPostData sendEmailPostData) {
        System.out.println("sendEmailPostData: " + sendEmailPostData);
        if(sendEmailPostData.getEmail().equals("a@b.c")) {
            System.out.println("throwing exception because email is a@b.c");
            throw new RuntimeException("throwing exception because email is a@b.c");
        }
        return "";
    }

}
