function calculate()
{
    let pairs = document.getElementById("values").value.split("\n");
    let list1 = [];
    let list2 = [];
    let distance = 0;
    let count = 0;
    let listSimilarity = 0;

    pairs.forEach(value =>
    {
        let tempList = value.split("   ");
        list1.push(tempList[0]);
        list2.push(tempList[1]);
    });

    list1.sort(function (a, b) {return a - b;});
    list2.sort(function (a, b) {return a - b;});

    for (let i = 0; i < pairs.length; i++)
    {
        for (let j = 0; j < pairs.length; j++)
        {
            if (list1[i] === list2[j])
            {
                count++;
            }

        }
        similarity = list1[i] * count;
        listSimilarity += similarity;
        count = 0;
    }

    for (let i = 0; i < pairs.length; i++)
    {
        distance += Math.abs(list1[0] - list2[0]);
        list1.shift();
        list2.shift();
    }

    document.getElementById("day1-part1-solution").textContent = `The total distance between the lists is ${distance}.`;

    document.getElementById("day1-part2-solution").textContent = `The similiarity score ${listSimilarity}.`;
}