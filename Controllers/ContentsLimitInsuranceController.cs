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

	public ContentsLimitInsuranceController(ILogger<ContentsLimitInsuranceController> logger, ICacheService cacheService)
	{
		_logger = logger;
		_cacheService = cacheService;
	}

	[HttpGet]
	public IEnumerable<ContentsLimitInsurance> Get()
	{
		return _cacheService.GetData<IEnumerable<ContentsLimitInsurance>>("contentsLimitInsuranceItems");
	}
}

