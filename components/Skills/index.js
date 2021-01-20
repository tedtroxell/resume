
import React from 'react'
import { Navbar, Col, Nav, NavItem } from 'reactstrap'
import ReactEcharts from 'echarts-for-react'; 
const echarts = require('echarts');

import {resumeData} from '../../data/resume';

class Languages extends React.Component {
    getOption(){
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                top: '0%',
                left: 'center'
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top:'0%',
                // containLabel: true
            },
            series: [
                {
                    name: 'Programming Language',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: 'Python'},
                        {value: 735, name: 'C++'},
                        {value: 580, name: 'JS/JSX'},
                        {value: 484, name: 'Java'},
                        {value: 300, name: 'C#'}
                    ]
                }
            ]
        }
    }
    render () {
        return (
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true} />
        )
    }
}

class Expertise extends React.Component {

    getOption() {
        return {
            xAxis: {
                type: 'category',
                data: ['NLP', 'Time Series', 'Computer Vision', 'Tabular', 'Reinforcement Learning', 'Product Design', 'API Design']
            },
            color:['#259aff'],
            yAxis: {
                type: 'value'
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                top:'3%',
                containLabel: true
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
    }

    render () {
        return (
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true} />
        )
    }
}

class Experiences extends React.Component {
    getOption() {
        return {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'Projects To Date'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            // legend: {
            //     data: ['Reinforcement Learning', 'NLP', 'Computer Vision', 'Tabular', 'Time Series']
            // },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2013','2014','2015','2016','2017','2018','2019','2020','2021']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: resumeData.projects.map(
                    (obj,idx) => {
                        return {
                            name:obj.type,
                            stack:'a',
                            data:obj.projects,
                            type: 'line',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: obj.colors[0]
                                }, {
                                    offset: 1,
                                    color: obj.colors[1]
                                }])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                        }
                    }
                )
        };
    }

    render () {
        return (
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true} />
        )
    }
}
class Timeline extends React.Component {
    
    getOption(){
        return {
            title:{
                text:'Making Impacts'
            },
            // animation:true,
            color:['#259aff'],
            xAxis: {
                type: 'category',
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show:false
            },
            grid:{
                top:-20,
                right:0,
                left:0,
                bottom:0
            },
            label: {
                show: true,
                formatter: function (param) {
                    return param.data.name;
                },
                minMargin: 10,
                position: 'bottom'
            },
            yAxis: {
                type: 'value',
                min:99,
                max:101,
                show:false
            },
            tooltip: {
                // trigger: 'axis',
                show:true,
                axisPointer: {            
                    type: 'shadow'        
                },
                borderWidth:1,
                textStyle:{color:'dark'},
                backgroundColor:'white',
                position: ['20%', '50%'],
                formatter: (params) => {
                    return `<b>${params.data.name}</b><hr/> <ul >${params.data.highlights.map( (o,i) => ('<li>'+o.trim()+'</li>') )}</ul> <br/>${params.data.description}`;
                }
            },
            series: [{
                data: resumeData.experience.map(
                    (obj,idx) => {
                        return {
                            name:obj.company+'\n('+obj.duration+')',
                            value:100,
                            description:obj.description,
                            highlights:obj.highlights
                        }
                    }
                ),
                type: 'line',
                smooth: true,
                
                animationDelay: function (idx) {
                    // delay for later data is larger
                    return idx * 100;
                },
                xAxisIndex:0,
                // animationEasing:'linear',
                symbolSize:32,
                lineStyle:{
                    width:22
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true} />
        )
    }

}
class Skillset extends React.Component {
    
    getOption(){
        var option = {
            title:{
                text:'Skill Sets'
            },
            color:['#259aff'],
            angleAxis: {
                type: 'category',
                axisLabel:{fontSize:15,color:'dark',fontWeight:'bold'},
                data: resumeData.skills.map( (o,i) => o.skill )
            },
            radiusAxis: {
                textStyle:{fontSize:25},
            },
            polar: {
                textStyle:{fontSize:25},
            },
            series: [{
                type: 'bar',
                data: resumeData.skills.map( (o,i) => o.value ),
                coordinateSystem: 'polar',
                name: 'Algorithms',
                stack: 'a',
                
                emphasis: {
                    focus: 'series'
                }
            }],
            
            legend: {
                show: false,
                textStyle:{fontSize:25},
                data: resumeData.skills.map( (o,i) => o.skill )
            }
        };
        return option;
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true} />
        )
    }

}

export {Skillset,Experiences,Timeline,Expertise,Languages};