function calculate()
{
    let lists = document.getElementById("values").value.split("\n");
    let list1 = [];

    let totalSafety = 0;
    let safety = 0;

    for (let i = 0; i < lists.length; i++)
    {
        let list2 = [];
        list1 = lists[i].split(" ");

        for (let j = 0; j < list1.length - 1; j++)
        {
            list2[j] = list1[j + 1] - list1[j];
        }

        if (list2.some((x) => Math.abs(x) > 3) || list2.some((x) => x === 0) || (list2.some((x) => x < 0) && list2.some((x) => x > 0)))
        {
            safety = 0;
        }

        else safety = 1;
        totalSafety += safety;
    }

    document.getElementById("day2-part1-solution").textContent = `In this dataset, ${totalSafety} reports are safe.`;

    // document.getElementById("day2-part2-solution").textContent = `If the Problem Dampener is activated, then ${totalSafetyDampened} reports are safe.`;
}
