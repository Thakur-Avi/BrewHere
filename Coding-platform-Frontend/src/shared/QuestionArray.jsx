const QuestionArray=[
    {
        questionid:"hdfh6537",
        quesname:"Two Sum",
        ques:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
        input1:"nums = [2,7,11,15], target = 9",
        output1:"[0,1]",
        input2:"nums = [3,2,4], target = 6",
        output2:"[1,2]",
        constraints:"2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9 ",
    },
    {
        questionid:"qwer1234",
        quesname:"Search Insert Position",
        ques:"Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.You must write an algorithm with O(log n) runtime complexity.",
        input1:"nums = [1,3,5,6], target = 5",
        output1:"2",
        input2:"nums = [1,3,5,6], target = 2",
        output2:"1",
        constraints:"1 <= nums.length <= 10^4, -10^4 <= nums[i] <= 10^4, -10^4 <= target <= 10^4, nums contains distinct values sorted in ascending order.",
    },
    {
        questionid:"tyui6907",
        quesname:"Container With Most Water",
        ques:"You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together with the x-axis form a container, such that the container contains the most water.Return the maximum amount of water a container can store.Notice that you may not slant the container.",
        input1:"height = [1,8,6,2,5,4,8,3,7]",
        output1:"49",
        input2:"height = [1,1]",
        output2:"1",
        constraints:"n == height.length, n == height.length, 0 <= height[i] <= 10^4",
    },
    {
        questionid:"asdf5481",
        quesname:"Permutations",
        ques:"Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
        input1:"nums = [1,2,3]",
        output1:"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        input2:"nums = [0,1]",
        output2:"[[0,1],[1,0]]",
        constraints:"1 <= nums.length <= 6, -10 <= nums[i] <= 10, All the integers of nums are unique.",
    },
    {
        questionid:"ghjk5612",
        quesname:"Merge Intervals",
        ques:"Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        input1:"intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output1:"[[1,6],[8,10],[15,18]]",
        input2:"intervals = [[1,4],[4,5]]",
        output2:"[[1,5]]",
        constraints:"1 <= intervals.length <= 10^4, intervals[i].length == 2, 0 <= start <= end <= 10^4",
    },
    {
        questionid:"zxcv7845",
        quesname:"Single Number",
        ques:"Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.You must implement a solution with a linear runtime complexity and use only constant extra space.",
        input1:"nums = [2,2,1]",
        output1:"1",
        input2:"nums = [4,1,2,1,2]",
        output2:"4",
        constraints:"1 <= nums.length <= 3 * 10^4, -3 * 10^4 <= nums[i] <= 3 * 10^4, Each element in the array appears twice except for one element which appears only once.",
    },
    {
        questionid:"hjkl3460",
        quesname:"Subsets",
        ques:"Given an integer array nums of unique elements, return all possible subsets(the power set).The solution set must not contain duplicate subsets. Return the solution in any order.",
        input1:"nums = [1,2,3]",
        output1:"[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        input2:"nums = [0]",
        output2:"[[],[0]]",
        constraints:"1 <= nums.length <= 10, -10 <= nums[i] <= 10, All the numbers of nums are unique.",
    },
    {
        questionid:"mnbv4867",
        quesname:"Plus One",
        ques:"You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.Increment the large integer by one and return the resulting array of digits.",
        input1:"digits = [1,2,3]",
        output1:"[1,2,4]",
        input2:"digits = [4,3,2,1]",
        output2:"[4,3,2,2]",
        constraints:"1 <= digits.length <= 100, 0 <= digits[i] <= 9, digits does not contain any leading 0's.",
    },
    {
        questionid:"lkjh1267",
        quesname:"Majority Element",
        ques:"Given an array nums of size n, return the majority element.The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
        input1:"nums = [3,2,3]",
        output1:"3",
        input2:"nums = [2,2,1,1,1,2,2]",
        output2:"2",
        constraints:"n == nums.length, 1 <= n <= 5 * 10^4, -10^9 <= nums[i] <= 10^9",
    },
    {
        questionid:"poiuy0967",
        quesname:"Intersection of Two Arrays",
        ques:"Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.",
        input1:"nums1 = [1,2,2,1], nums2 = [2,2]",
        output1:"[2]",
        input2:"nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        output2:"[9,4]",
        constraints:"1 <= nums1.length, nums2.length <= 1000, 0 <= nums1[i], nums2[i] <= 1000",
    },
]

export default QuestionArray;