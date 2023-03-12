using contents_limit_insurance.Services;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace contents_limit_insurance.Controllers;

[ApiController]
[Route("api/contents-limit-insurance-items")]
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

	[HttpPost]
	public ActionResult<long> AddItem(ContentsLimitInsurance contentsLimitInsurance)
	{
		try
		{
			var result = _service.AddItem(contentsLimitInsurance);
			return Ok(result);
		}
		catch (Exception)
		{
			var error = "Error adding contents limit insurance item";
			_logger.LogError(error);
			return StatusCode(500, error);
		}
	}

	[HttpPost("sample")]
	public ActionResult<IEnumerable<ContentsLimitInsurance>> GenerateSampleItems()
	{
		try
		{
			var result = _service.GenerateSampleItems();
			return Ok(result);
		}
		catch (Exception)
		{
			var error = "Error generating sample contents limit insurance items";
			_logger.LogError(error);
			return StatusCode(500, error);
		}
	}

	[HttpDelete("{id}")]
	public ActionResult<bool> DeleteItem(long id)
	{
		try
		{
			var result = _service.DeleteItem(id);
			return Ok(result);
		}
		catch (Exception)
		{
			var error = "Error deleting contents limit insurance item";
			_logger.LogError(error);
			return StatusCode(500, error);
		}
	}
}

