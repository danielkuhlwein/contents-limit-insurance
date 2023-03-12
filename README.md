Welcome to the Contents Limit Insurance Application! ✨

# Introduction

This is a sample application that demonstrates how to build a modern web application using the latest version of .NET and Angular. The application is built as a .NET 7 Web API and Angular v15 with Angular Material v15 UI framework, and it allows users to calculate insurance coverage required for the contents of their homes or rental units.

The project showcases best practices in software engineering, including the use of design patterns, dependency injection, and proper separation of concerns. It also demonstrates the use of modern technologies such as Redis for caching and persistence.

# Prerequisites

Before proceeding with the installation, please make sure that the following tools are installed on your machine:

* [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
* [Node.js](https://nodejs.org/en/download/)
* [Angular CLI](https://angular.io/cli)
* [Redis](https://redis.io/download)

# Installation

1. Clone the repository
2. Change to the project root:

```bash
cd contents-limit-insurance
```

3. Install the required .NET packages:
```bash
dotnet restore
```

4. Change to the Angular project root:
```bash
cd ClientApp
```

5. Install the required Angular packages
```bash
npm install
```

# Setup

1. Start Redis server:
```bash
redis-server
```

2. Start the .NET Web API:
```bash
dotnet run
```

3. Navigate to `https://localhost:7233` in your web browser
  * It should initialize the Angular Application and automatically redirect you to `https://localhost:44451`

---

# Design Patterns

This sample application demonstrates common design patterns supported in .NET such as dependency injection.

We can define interfaces and classes for the dependencies that need to be injected. For example, `ICacheService`:

```csharp
public interface ICacheService
{
  T GetData<T>(string key);
  bool SetData<T>(string key, T value, int? expirationOffset = null);
  bool RemoveData(string key);
  bool InsertSampleData();
}
```

Then a complete implementation of the `ICacheService` interface:

```csharp
public class CacheService : ICacheService
{
  ...

  public T GetData<T>(string key)
  {
    var value = _db.StringGet(key);
    return value.HasValue ? JsonConvert.DeserializeObject<T>(value) : default;
  }

  public bool SetData<T>(string key, T value, int? expirationOffset = null)
  {
    ...
  }

  public bool RemoveData(string key)
  {
    ...
  }

  public bool InsertSampleData()
  {
    ...
  }
}
```

Configure the service in the `Startup` class:

```csharp
public void ConfigureServices(IServiceCollection services)
{
   ...
   services.AddSingleton<ICacheService, CacheService>();
   ...
}
```

In this example, the `CacheService` class is registered as a singleton instance of the `ICacheService` interface.

Finally, in another class that requires the dependency, we can inject it through the constructor:


```csharp
public class ContentsLimitInsuranceRepo : IContentsLimitInsuranceRepo
{
  private readonly ICacheService _cacheService;

  public ContentsLimitInsuranceRepo(ICacheService cacheService)
  {
    _cacheService = cacheService;
  }
}
```

In this example, the `CacheService` instance is automatically injected into the `ContentsLimitInsuranceRepo` instance through its constructor. This allows for more flexible and testable code, as the dependencies can easily be swapped out for mock implementations in tests or production use.

# Single Responsibility Principle

The Single Responsibility Principle (SRP) is a design principle that states that a class should have only one reason to change. In other words, a class should have only one responsibility or only one job to do.

In a typical .NET Core Web API, we can demonstrate the SRP by separating different concerns into separate classes. Let's look at an example in this sample application.

One class can handle the responsibility of handling HTTP requests and responses. This class is called the Controller. It is responsible for receiving HTTP requests from the client, processing the requests, and sending back HTTP responses to the client.

```csharp
public class ContentsLimitInsuranceController : ControllerBase
{
  private readonly ILogger<ContentsLimitInsuranceController> _logger;
  private readonly IContentsLimitInsuranceService _service;

  public ContentsLimitInsuranceController(
    ILogger<ContentsLimitInsuranceController> logger,
    IContentsLimitInsuranceService service)
  {
    _logger = logger;
    _service = service;
  }

  [HttpGet]
  public ActionResult<IEnumerable<ContentsLimitInsurance>> GetItems()
  {
    try
    {
      var result = _service.GetItems();
      return Ok(result);
    }
    catch (Exception)
    {
      var error = "Error getting contents limit insurance items";
      _logger.LogError(error);
      return StatusCode(500, error);
    }
  }

  [HttpGet("categories")]
  public ActionResult<IEnumerable<ContentsLimitInsuranceCategory>> GetCategories()
  {
    try
    {
      var result = _service.GetCategories();
      return Ok(result);
    }
    catch (Exception)
    {
      var error = "Error getting contents limit insurance categories";
      _logger.LogError(error);
      return StatusCode(500, error);
    }
  }

  [HttpPut]
  public ActionResult<bool> UpdateItem(ContentsLimitInsurance contentsLimitInsurance)
  {
    try
    {
      var result = _service.UpdateItem(contentsLimitInsurance);
      return Ok(result);
    }
    catch (Exception)
    {
      var error = "Error updating contents limit insurance item";
      _logger.LogError(error);
      return StatusCode(500, error);
    }
  }

  ...
}
```

The `ContentsLimitInsuranceController` class only handles HTTP requests and responses. It delegates the actual processing of the requests to another class called the Service. The Service is responsible for handling business logic related to creating, retrieving, and deleting insurance items.

```csharp
public class ContentsLimitInsuranceService : IContentsLimitInsuranceService
{
  private readonly IContentsLimitInsuranceRepo _repo;

  public ContentsLimitInsuranceService(IContentsLimitInsuranceRepo repo)
  {
    _repo = repo;
  }

  public IEnumerable<ContentsLimitInsurance> GetItems()
  {
    return _repo.GetItems();
  }

  public IEnumerable<ContentsLimitInsuranceCategory> GetCategories()
  {
    return _repo.GetCategories();
  }
  
  public bool UpdateItem(ContentsLimitInsurance contentsLimitInsurance)
  {
    return _repo.UpdateItem(contentsLimitInsurance);
  }

  ...
}
```

The `ContentsLimitInsuranceService` class only handles business logic related to creating, retrieving, and deleting insurance items. It delegates the actual storage and retrieval of the data to another class called the Repository. The Repository is responsible for interacting with the data store to get and set the data.

```csharp
public class ContentsLimitInsuranceRepo : IContentsLimitInsuranceRepo
{
  private readonly ICacheService _cacheService;
  private readonly string _itemsKey = "contentsLimitInsuranceItems";
  private readonly string _categoriesKey = "contentsLimitInsuranceCategories";

  public ContentsLimitInsuranceRepo(ICacheService cacheService)
  {
    _cacheService = cacheService;
  }

  public IEnumerable<ContentsLimitInsurance> GetItems()
  {
    return _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
  }

  public IEnumerable<ContentsLimitInsuranceCategory> GetCategories()
  {
    return _cacheService.GetData<IEnumerable<ContentsLimitInsuranceCategory>>(_categoriesKey);
  }

  public bool UpdateItem(ContentsLimitInsurance contentsLimitInsurance)
  {
    var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
    var itemToUpdate = contentsLimitInsuranceItems.FirstOrDefault(x => x.Id == contentsLimitInsurance.Id);
    if (itemToUpdate != null)
    {
      itemToUpdate.Category = contentsLimitInsurance.Category;
      itemToUpdate.Name = contentsLimitInsurance.Name;
      itemToUpdate.Value = contentsLimitInsurance.Value;
      _cacheService.SetData(_itemsKey, contentsLimitInsuranceItems);
      return true;
    }
    return false;
  }

  ...
}
```

The `ContentsLimitInsuranceRepo` class only handles database operations. It does not handle business logic or HTTP requests and responses.

By separating different concerns into separate classes, we are following the Single Responsibility Principle. The `ContentsLimitInsuranceController` class only handles HTTP requests and responses, and does not handle database operations or business logic. This separation of concerns makes the code more modular, easier to maintain and test, and helps to prevent bugs that can arise from tightly coupled code. By adhering to the Single Responsibility Principle, we can create code that is more readable, flexible, and scalable, making it easier to add new features and functionality to our application in the future.

# Redis
In a real-world application Redis would typically be used in conjunction with a permanent data persistence method such as an SQL database. For the purposes of this example project, only Redis is used and objects are set to expire after 60 minutes.
