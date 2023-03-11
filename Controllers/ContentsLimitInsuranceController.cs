using Microsoft.AspNetCore.Mvc;
using Models;
using Redis;

namespace contents_limit_insurance.Controllers;

[ApiController]
[Route("api/contents-limit-insurance-items")]
public class ContentsLimitInsuranceController : ControllerBase
{
	private readonly ILogger<ContentsLimitInsuranceController> _logger;
	private readonly ICacheService _cacheService;
	private readonly string _itemsKey = "contentsLimitInsuranceItems";
	private readonly string _categoriesKey = "contentsLimitInsuranceCategories";

	public ContentsLimitInsuranceController(ILogger<ContentsLimitInsuranceController> logger, ICacheService cacheService)
	{
		_logger = logger;
		_cacheService = cacheService;
	}

	[HttpGet]
	public IEnumerable<ContentsLimitInsurance> Get()
	{
		return _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
	}

	[HttpGet("categories")]
	public IEnumerable<ContentsLimitInsuranceCategory> GetCategories()
	{
		return _cacheService.GetData<IEnumerable<ContentsLimitInsuranceCategory>>(_categoriesKey);
	}

	[HttpPut]
	public bool Put(ContentsLimitInsurance contentsLimitInsurance)
	{
		var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
		var itemToUpdate = contentsLimitInsuranceItems.FirstOrDefault(x => x.Id == contentsLimitInsurance.Id);
		if (itemToUpdate != null)
		{
			itemToUpdate.Category = contentsLimitInsurance.Category;
			itemToUpdate.Name = contentsLimitInsurance.Name;
			itemToUpdate.Value = contentsLimitInsurance.Value;
			_cacheService.SetData(_itemsKey, contentsLimitInsuranceItems, DateTimeOffset.Now.AddMinutes(5.0));
			return true;
		}
		return false;
	}

	[HttpPost]
	public long Post(ContentsLimitInsurance contentsLimitInsurance)
	{
		var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
		contentsLimitInsurance.Id = contentsLimitInsuranceItems.Max(x => x.Id) + 1;
		contentsLimitInsuranceItems = contentsLimitInsuranceItems.Append(contentsLimitInsurance);
		_cacheService.SetData(_itemsKey, contentsLimitInsuranceItems, DateTimeOffset.Now.AddMinutes(5.0));
		return contentsLimitInsurance.Id;
	}

	[HttpDelete("{id}")]
	public bool Delete(long id)
	{
		var contentsLimitInsuranceItems = _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>(_itemsKey);
		var itemToRemove = contentsLimitInsuranceItems.FirstOrDefault(x => x.Id == id);
		if (itemToRemove != null)
		{
			contentsLimitInsuranceItems = contentsLimitInsuranceItems.Where(x => x.Id != id);
			_cacheService.SetData(_itemsKey, contentsLimitInsuranceItems, DateTimeOffset.Now.AddMinutes(5.0));
			return true;
		}
		return false;
	}
}

