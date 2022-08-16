package Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
        features = "src/test/resources/Features", strict=true, glue="TestLogin", 
        		plugin = {"pretty","html:target/cucumber-report.html","json:target/aConnexion.json"}
        
  )     
public class TestRun {

}