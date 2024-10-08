import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';


import '../Css/Van/VanCharttimeline.css'
import { blue } from '@mui/material/colors';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Charttimeline = () => {
    const data = {
        labels: ['1867', '1883', '1891', '1893', '1894', '1895', '1897', '1898', '1900', '1902', '1903', '1904', '1906', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1919', '1920', '1922', '1923', '1929', '1930', '1931', '1934', '', ''],
        datasets: [
            {
                label: 'Struggles (Difficulties)',
                data: [0, 16, 24, 0, 27, 0, 30, 0, 0, 35, 36, 0, 39, 42, 0, 44, 0, 46, 0, 48, 0, 0, 0, 0, 0, 0, 0, 67, 67, 67, 80],
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                pointBackgroundColor: 'red',
                pointHoverRadius: 7,
                fill: false,
            },
            {
                label: 'Achievements (Successes)',
                data: [0, 0, 0, 26, 27, 28, 30, 31, 33, 0, 36, 37, 39, 42, 43, 44, 45, 46, 47, 48, 52, 53, 55, 56, 62, 63, 64, 67, 67, 67, 80],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                pointBackgroundColor: 'blue',
                pointHoverRadius: 7,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
                ticks: {
                    autoSkip: true,
                    maxRotation: 0,
                    minRotation: 0,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Age',
                },
                suggestedMin: 0,
                suggestedMax: 80,
            },
        },
        plugins: {
            tooltip: {
                enabled: false,
                usePointStyle: true,
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex;
                        const dataset = context.dataset.borderColor === 'red' ? 'red' : 'blue';
                        const events = {
                            0: {
                                red: 'Poland was torn apart by three empires, and her mother died.',
                                blue: ' Good at studying, top of the class in every subject.',
                            },
                            1: {
                                red: 'Being a tutor - job she dislikes. She has a dream of scientific research. ',
                                blue: '',
                            },
                            2: {
                                red: 'Difficult life studying abroad in France.',
                                blue: '',
                            },
                            3: {
                                red: '',
                                blue: 'Passed first in school exit exam.\nAwarded a bachelor of science degree. \nReceived a small scholarship and promptly paid it back in 1897, just as she began to earn a living.  \nHer understanding completely depends on the theoretical scope, but she desires the talent of an engineer, not just a professor position, and wants to help her people with more practical projects.',
                            },
                            4: {
                                red: 'As for Poland, she is not respected or trusted because she is a woman.',
                                blue: 'Awarded degree in mathematics and science.  Accepted the invitation of the French Business Association to research magnetic steel.',
                            },
                            5: {
                                red: '',
                                blue: 'July 25, 1895: Married Pierre Curie.',
                            },
                            6: {
                                red: 'Still continuing to teach at Ecole Normale Superieure to earn a living.',
                                blue: 'Gave birth to her first daughter-Irence.<br> Preparing to defend a doctoral thesis (choosing the radioactive phenomenon of uranium as a research topic) ',
                            },
                            7: {
                                red: '',
                                blue: 'She discovered that the element thorium is also radioactive. Her work fascinated her husband so much that Pierie decided to give up his crystal work and join her.<br> July 1898: The couple published a joint paper announcing the existence of an element they named polinium, in honor of her homeland - Poland. December 26, 1998, the couple announced the existence of a second element that they named "radium". During their research they also coined the word "radioactive". Finally, the results were obtained in significant quantities, free of barium contamination.',
                            },
                            8: {
                                red: '',
                                blue: 'First female lecturer at Ecole Normale Superieure.',
                            },
                            9: {
                                red: 'Visited Poland after father\'s death.',
                                blue: '',
                            },
                            10: {
                                red: 'June 1903: When invited to the Royal Institution in London to give a speech on radiation, she was prevented from speaking because she was female.<br> The couple did not patent their discovery and benefited little from this increasingly profitable business.',
                                blue: 'The University of Paris awarded Marie the title of Outstanding Doctor of Physical Sciences.<br> The Royal Academy of Sciences, London, awarded them the Devy Medal and one month later, the Swedish Academy of Sciences awarded two people the Nobel Prize in Physics.',
                            },
                            11: {
                                red: '',
                                blue: 'December 1904: Second child born.',
                            },
                            12: {
                                red: 'April 19, 1906: Husband passed away.',
                                blue: 'May 13, 1906: Became first female professor at University of Paris.',
                            },
                            13: {
                                red: 'Initiative to establish the Radium Institute.',
                                blue: '',
                            },
                            14: {
                                red: '',
                                blue: 'Succeeded in isolating radium. Standard definition of radioactive emission (Curie)',
                            },
                            15: {
                                red: 'The emotional scandal between her and physicist Paul Lagevin.',
                                blue: 'International recognition of her work rose to new heights. The Royal Swedish Academy of Sciences honored her with the Nobel Prize in Chemistry for the second time.',
                            },
                            16: {
                                red: '',
                                blue: 'The Warsaw Scientific Society offered her the position of director of a new laboratory in Warsaw, but she turned it down to concentrate on the developing Radium Institute.',
                            },
                            17: {
                                red: 'Ignored by the Russian government. The development of the institute was interrupted by the war.',
                                blue: 'She visited Poland and was welcomed in Warsaw.',
                            },
                            18: {
                                red: '',
                                blue: 'Marie Curie\'s second Nobel Prize helped her convince the French government to support the Radium Institute. In August 1914, she was appointed Director here.',
                            },
                            19: {
                                red: 'She has never received any official recognition from the French government.',
                                blue: 'Marie Curie produced hollow needles containing "radium emission" as a humanitarian contribution to the French war effort.',
                            },
                            20: {
                                red: '',
                                blue: 'The Institute is fully operational again. After the war, she summarized the experience in a book "X-rays in times of war (1919)".',
                            },
                            21: {
                                red: '',
                                blue: 'The President of the United States received her at the White House to present her with 1g of radium collected in the United States. Before the meeting, France offered her the Legion of Merit award but she refused.',
                            },
                            22: {
                                red: '',
                                blue: 'She became an academician of the French Academy of Medicine, lecturing in Belgium, Brazil, Spain, and Czechoslovakia. Under her leadership, the Institute became one of the four largest radiation research laboratories in the world. In August 1922, she became a member of the newly established Committee for International Intellectual Cooperation of the League of Nations.',
                            },
                            23: {
                                red: '',
                                blue: 'Biographical article about her late husband, titled "Piere Curie".',
                            },
                            24: {
                                red: '',
                                blue: 'The second trip to the United States was successful in equipping the Warsaw Radium Institute with radium.',
                            },
                            25: {
                                red: '',
                                blue: 'She was elected to the International Atomic Weight Commission, where she served until her death.',
                            },
                            26: {
                                red: '',
                                blue: 'Curie was awarded the Cameron Prize in Therapy from the University of Edinburgh.',
                            },
                            27: {
                                red: 'July 4, 1934: She died at the Sancellemoz sanatorium in Passy, ​​Haite-Savoie, from aplastic anemia.',
                                blue: 'Visit Poland one last time. Worked on a book "Radioactivity" published in 1935, after her death.',
                            },
                            28: {
                                red: '',
                                blue: '',
                            },
                            29: {
                                red: '',
                                blue: '',
                            },
                        };
                        const event = events[index][dataset];
                        return `${dataset === 'red' ? 'Struggles: ' : 'Achievements: '}${event}`;
                    },
                },
                external: function (context) {
                    let tooltipEl = document.getElementById('chartjs-tooltip');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.className = 'chartjs-tooltip';
                        document.body.appendChild(tooltipEl);
                    }

                    const tooltipModel = context.tooltip;

                    // Hide tooltip if not visible
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set content of tooltip
                    if (tooltipModel.body) {
                        const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);
                        // tooltipEl.innerHTML = bodyLines.join('<br>');
                        // Check the dataset's borderColor to determine which color to use
                        const datasetColor = context.tooltip.dataPoints[0].dataset.borderColor;
                        const textColor = datasetColor === 'red' ? 'red' : 'blue';

                        // Set colored content with span and inline styles
                        tooltipEl.innerHTML = `<span style="color: ${textColor};">${bodyLines.join('<br>')}</span>`;
                    }
                    // Set position of tooltip
                    const position = context.chart.canvas.getBoundingClientRect();
                    const left = position.left + window.pageXOffset + tooltipModel.caretX;
                    const top = position.top + window.pageYOffset + tooltipModel.caretY;

                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = `${left}px`;
                    tooltipEl.style.top = `${top}px`;
                    tooltipEl.style.pointerEvents = 'none';

                }


            }

        },
    };
//};

return (
    <>
    
    
    <h2 className="text-center">Marie Curie: Perseverance through Hardship</h2>
    <div style={{ height: '400px', width: '100%', paddingRight:'2rem' }}>
        <Line data={data} options={options} />
    </div>
    </>
);
};

export default Charttimeline;
