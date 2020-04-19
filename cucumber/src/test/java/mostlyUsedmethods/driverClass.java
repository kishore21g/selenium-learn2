package mostlyUsedmethods;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class driverClass {
	public WebDriver driver;
	String ApplicaionURL= "https://lglgrl-cob-stg2.pegacloud.net/prweb/PRServlet/";
	
	public WebDriver calldriver()
		{
		
		System.setProperty("webdriver.chrome.driver","E://driver//chromedriver.exe");
		 driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		driver.get(ApplicaionURL);
		return driver;
		//driver.findElement(By.id("txtUserID")).sendKeys("ImplementationManager");
		//driver.findElement(By.id("txtPassword")).sendKeys("pega@12345");
		}	
}
