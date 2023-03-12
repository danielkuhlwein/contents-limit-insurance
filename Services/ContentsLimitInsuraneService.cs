
using contents_limit_insurance.Repositories;
using Models;

namespace contents_limit_insurance.Services;

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

	public long AddItem(ContentsLimitInsurance contentsLimitInsurance)
	{
		return _repo.AddItem(contentsLimitInsurance);
	}

	public IEnumerable<ContentsLimitInsurance> GenerateSampleItems()
	{
		var success = _repo.GenerateSampleItems();
		return _repo.GetItems();
	}

	public bool DeleteItem(long id)
	{
		return _repo.DeleteItem(id);
	}
}