package Useless.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import mostlyUsedmethods.driverClass;

public class stepDefinition   {

 WebDriver driver;
 
 String ApplicaionURL= "https://lglgrl-cob-stg2.pegacloud.net/prweb/PRServlet/";
	
	
	@Given("^open the chrome browser$")
	public void open_the_chrome_browser() throws Throwable {
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-features=VizDisplayCompositor");
		 System.setProperty("webdriver.chrome.driver","E://driver//chromedriver.exe");
		 driver= new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		System.out.println("Hello team creating my first git project");
		
	   
	}
	@Then("^Give the URL in the text box and login$")
	public void give_the_URL_in_the_text_box_and_login() throws Throwable {
		driver.get(ApplicaionURL);
		driver.findElement(By.id("txtUserID")).sendKeys("HS_ImplementationUser");
      driver.findElement(By.id("txtPassword")).sendKeys("Myrules@1234");
      driver.findElement(By.className("loginButtonText")).click();
	   driver.findElement(By.xpath("//a[contains(text(),'Dashboard')]")).click();
	}

	@Then("^click on the logout$")
	public void click_on_the_logout() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//i[@title='HSImpl User']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[contains(text(),'Log off')]")).click();
	}
}
