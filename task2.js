function checkLengthString(string) {
    if (string.length > 50) {
        return string.substring(0, 47) + '...';
    }

    return string;
}

console.log(checkLengthString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit erat eu dolor mattis vehicula. Quisque tempor vulputate nunc, vel euismod mi rutrum ac. Morbi eget viverra turpis, ut ullamcorper velit. Curabitur rhoncus eu eros quis vulputate. In lobortis, nibh quis aliquet rhoncus, lectus mi auctor libero, nec interdum augue nibh vitae urna. Vestibulum vel sollicitudin nibh. Maecenas venenatis malesuada scelerisque. Cras dapibus leo ut quam aliquam congue.'));
