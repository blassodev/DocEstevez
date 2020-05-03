import React from 'react';
import * as SC from './style';

function IMCTable() {
  return (
    <SC.IMCTableWrapper>
      <SC.IMCTable>
        <thead>
          <tr>
            <th></th>
            <th scope="col">150</th>
            <th scope="col">155</th>
            <th scope="col">160</th>
            <th scope="col">165</th>
            <th scope="col">170</th>
            <th scope="col">175</th>
            <th scope="col">180</th>
            <th scope="col">185</th>
            <th scope="col">190</th>
            <th scope="col">195</th>
            <th scope="col">200</th>
            <th scope="col">205</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">40</th>
            <td className="yellow">17,78</td>
            <td className="yellow">16,65</td>
            <td className="yellow">15,63</td>
            <td className="yellow">14,69</td>
            <td className="yellow">13,84</td>
            <td className="yellow">13,06</td>
            <td className="yellow">12,35</td>
            <td className="yellow">11,69</td>
            <td className="yellow">11,08</td>
            <td className="yellow">10,52</td>
            <td className="yellow">10,00</td>
            <td className="yellow">9,52</td>
          </tr>
          <tr>
            <th scope="row">45</th>
            <td className="green">20,00</td>
            <td className="green">18,73</td>
            <td className="yellow">17,58</td>
            <td className="yellow">16,53</td>
            <td className="yellow">15,57</td>
            <td className="yellow">14,69</td>
            <td className="yellow">13,89</td>
            <td className="yellow">13,15</td>
            <td className="yellow">12,47</td>
            <td className="yellow">11,83</td>
            <td className="yellow">11,23</td>
            <td className="yellow">10,71</td>
          </tr>
          <tr>
            <th scope="row">50</th>
            <td className="green">22,22</td>
            <td className="green">20,81</td>
            <td className="green">19,53</td>
            <td className="yellow">18,37</td>
            <td className="yellow">17,30</td>
            <td className="yellow">16,33</td>
            <td className="yellow">15,43</td>
            <td className="yellow">14,61</td>
            <td className="yellow">13,85</td>
            <td className="yellow">13,15</td>
            <td className="yellow">12,50</td>
            <td className="yellow">11,90</td>
          </tr>
          <tr>
            <th scope="row">55</th>
            <td className="green">24,44</td>
            <td className="green">22,89</td>
            <td className="green">21,48</td>
            <td className="green">20,20</td>
            <td className="yellow">19,03</td>
            <td className="yellow">17,96</td>
            <td className="yellow">16,98</td>
            <td className="yellow">16,07</td>
            <td className="yellow">15,24</td>
            <td className="yellow">14,46</td>
            <td className="yellow">13,75</td>
            <td className="yellow">13,09</td>
          </tr>
          <tr>
            <th scope="row">60</th>
            <td className="beige">26,67</td>
            <td className="beige">24,97</td>
            <td className="green">23,44</td>
            <td className="green">22,04</td>
            <td className="green">20,76</td>
            <td className="green">19,59</td>
            <td className="green">18,52</td>
            <td className="yellow">17,53</td>
            <td className="yellow">16,62</td>
            <td className="yellow">15,78</td>
            <td className="yellow">15,00</td>
            <td className="yellow">14,28</td>
          </tr>
          <tr>
            <th scope="row">65</th>
            <td className="beige">28,89</td>
            <td className="beige">27,06</td>
            <td className="beige">25,39</td>
            <td className="green">23,88</td>
            <td className="green">22,49</td>
            <td className="green">21,22</td>
            <td className="green">20,06</td>
            <td className="green">18,99</td>
            <td className="yellow">18,01</td>
            <td className="yellow">17,09</td>
            <td className="yellow">16,25</td>
            <td className="yellow">15,47</td>
          </tr>
          <tr>
            <th scope="row">70</th>
            <td className="pink">31,11</td>
            <td className="beige">29,14</td>
            <td className="beige">27,34</td>
            <td className="beige">25,71</td>
            <td className="green">24,22</td>
            <td className="green">22,86</td>
            <td className="green">21,60</td>
            <td className="green">20,45</td>
            <td className="green">19,39</td>
            <td className="yellow">18,41</td>
            <td className="yellow">17,50</td>
            <td className="yellow">16,66</td>
          </tr>
          <tr>
            <th scope="row">75</th>
            <td className="pink">33,33</td>
            <td className="pink">31,22</td>
            <td className="beige">29,30</td>
            <td className="beige">27,55</td>
            <td className="beige">25,95</td>
            <td className="green">24,49</td>
            <td className="green">23,15</td>
            <td className="green">21,91</td>
            <td className="green">20,78</td>
            <td className="green">19,72</td>
            <td className="green">18,75</td>
            <td className="yellow">17,85</td>
          </tr>
          <tr>
            <th scope="row">80</th>
            <td className="pink">35,56</td>
            <td className="pink">33,30</td>
            <td className="pink">31,25</td>
            <td className="beige">29,38</td>
            <td className="beige">27,68</td>
            <td className="beige">26,12</td>
            <td className="green">24,69</td>
            <td className="green">23,37</td>
            <td className="green">22,16</td>
            <td className="green">21,04</td>
            <td className="green">20,00</td>
            <td className="green">19,04</td>
          </tr>
          <tr>
            <th scope="row">85</th>
            <td className="pink">37,78</td>
            <td className="pink">35,38</td>
            <td className="pink">33,20</td>
            <td className="pink">31,22</td>
            <td className="beige">29,41</td>
            <td className="beige">27,76</td>
            <td className="beige">26,23</td>
            <td className="green">24,84</td>
            <td className="green">23,55</td>
            <td className="green">22,35</td>
            <td className="green">21,25</td>
            <td className="green">20,23</td>
          </tr>
          <tr>
            <th scope="row">90</th>
            <td className="red">40,00</td>
            <td className="pink">37,46</td>
            <td className="pink">35,16</td>
            <td className="pink">33,06</td>
            <td className="pink">31,14</td>
            <td className="beige">29,39</td>
            <td className="beige">27,78</td>
            <td className="beige">26,30</td>
            <td className="green">24,93</td>
            <td className="green">23,67</td>
            <td className="green">22,50</td>
            <td className="green">21,42</td>
          </tr>
          <tr>
            <th scope="row">95</th>
            <td className="red">42,22</td>
            <td className="pink">39,54</td>
            <td className="pink">37,11</td>
            <td className="pink">34,89</td>
            <td className="pink">32,87</td>
            <td className="pink">31,02</td>
            <td className="beige">29,32</td>
            <td className="beige">27,76</td>
            <td className="beige">26,32</td>
            <td className="beige">24,98</td>
            <td className="green">23,75</td>
            <td className="green">22,61</td>
          </tr>
          <tr>
            <th scope="row">100</th>
            <td className="red">44,44</td>
            <td className="red">41,62</td>
            <td className="pink">39,06</td>
            <td className="pink">36,73</td>
            <td className="pink">34,60</td>
            <td className="pink">32,65</td>
            <td className="pink">30,86</td>
            <td className="beige">29,22</td>
            <td className="beige">27,70</td>
            <td className="beige">26,30</td>
            <td className="beige">25,00</td>
            <td className="green">23,80</td>
          </tr>
          <tr>
            <th scope="row">105</th>
            <td className="red">46,67</td>
            <td className="red">43,70</td>
            <td className="red">41,02</td>
            <td className="pink">38,57</td>
            <td className="pink">36,33</td>
            <td className="pink">34,29</td>
            <td className="pink">32,41</td>
            <td className="pink">30,68</td>
            <td className="beige">29,09</td>
            <td className="beige">27,61</td>
            <td className="beige">26,25</td>
            <td className="beige">24,99</td>
          </tr>
          <tr>
            <th scope="row">110</th>
            <td className="red">48,89</td>
            <td className="red">45,79</td>
            <td className="red">42,97</td>
            <td className="red">40,40</td>
            <td className="pink">38,06</td>
            <td className="pink">35,92</td>
            <td className="pink">33,95</td>
            <td className="pink">32,14</td>
            <td className="pink">30,47</td>
            <td className="beige">28,93</td>
            <td className="beige">27,50</td>
            <td className="beige">26,17</td>
          </tr>
          <tr>
            <th scope="row">115</th>
            <td className="red">51,11</td>
            <td className="red">47,87</td>
            <td className="red">44,92</td>
            <td className="red">42,24</td>
            <td className="red">39,79</td>
            <td className="pink">37,55</td>
            <td className="pink">35,49</td>
            <td className="pink">33,60</td>
            <td className="pink">31,86</td>
            <td className="pink">30,24</td>
            <td className="beige">28,75</td>
            <td className="beige">27,36</td>
          </tr>
          <tr>
            <th scope="row">120</th>
            <td className="red">53,33</td>
            <td className="red">49,95</td>
            <td className="red">46,88</td>
            <td className="red">44,08</td>
            <td className="red">41,52</td>
            <td className="red">39,18</td>
            <td className="pink">37,04</td>
            <td className="pink">35,06</td>
            <td className="pink">33,24</td>
            <td className="pink">31,56</td>
            <td className="pink">30,00</td>
            <td className="beige">28,55</td>
          </tr>
        </tbody>
      </SC.IMCTable>
    </SC.IMCTableWrapper>
  );
};

export default IMCTable;