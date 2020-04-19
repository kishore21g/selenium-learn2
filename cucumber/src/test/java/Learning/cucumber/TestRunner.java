package Learning.cucumber;



import org.junit.runner.RunWith;

import Useless.stepdefinition.stepDefinition;
import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;
	 	 	
@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/java/Towritefeatures/featurefile1.feature",glue="Useless/stepdefinition",
format = {"pretty","html:output"})

public class TestRunner {
	

	
}
