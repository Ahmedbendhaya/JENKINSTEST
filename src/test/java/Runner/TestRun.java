package Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@Test
@RunWith(Cucumber.class)
@CucumberOptions(
		
        features = "src/test/resources/Features", strict=true, glue="LoginStepDef", 
        		plugin = {"pretty","html:target/cucumber-report.html"}
        
  )     
public class TestRun {

}
