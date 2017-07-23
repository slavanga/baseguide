## Base

### Normalize

Baseguide uses [normalize.css](https://necolas.github.io/normalize.css/)
 for optimal cross-browser rendering.

    @example

### Content

Base spacing is applied to all flow content elements.

    @example
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

    <p>
      <i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</i>
    </p>

    <p>
      <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b>
    </p>

    <ul>
      <li>Choice A</li>
      <li>Choice B
        <ul>
          <li>Sub 1</li>
          <li>Sub 2</li>
        </ul>
      </li>
    </ul>

### Headings

The headings sizes are generated using modular scale.

    @example
    <h1>Heading h1</h1>
    <h2>Heading h2</h2>
    <h3>Heading h3</h3>
    <h4>Heading h4</h4>
    <h5>Heading h5</h5>
    <h6>Heading h6</h6>

### Print

Basic print styles from the HTML5 Boilerplate are included.

    @example


## Objects

### List

    @example
    <ul class="list-unstyled">
      <li>Unstyled Item 1</li>
      <li>Unstyled Item 2</li>
      <li>Unstyled Item 3</li>
    </ul>

    <ul class="list-inline">
      <li>Inline Item 1</li>
      <li>Inline Item 2</li>
      <li>Inline Item 3</li>
    </ul>

    <ul class="list-equal">
      <li>Equal Item 1</li>
      <li>Equal Item 2</li>
      <li>Equal Item 3</li>
    </ul>

### Media

    @example
    <div class="spacing-bottom">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAChklEQVR4nO3X0U7iQACFYd//CSS2VgtESUm0GARSIQQoSjvvdPZisbHsImRjssf4X/whMxczZL52AhchBJFPF//7CxAg1gFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZlmC1HV91txXrPtVa397kM1moyiKNJvNmrmqqnR3d6c0TbXZbJr5oiiUJInyPD9r7TRNlWVZay7PcyVJoqIoTu73I0FCCHp4eGiBzOdzZVmm5+fn1uGnaaqyLBXHsaqqauZfX19bn4frvI93u52ur6+1Xq/V7XZP7gfIfjyZTPT4+KiiKFoHGkWR6rrWzc2NttutQvh9zfR6PQ0Ggz8O8xCkLEuladrAnNoPkP14PB4rz3O9vLxoMBg081dXVwoh6Pb2tnW1jEYjXV5earlcfgry/mbsdjtFUXRyP0D24+l02jyxw+GwmY/jWHVdK0mS5nqq61p5nqssS43H409B3t+Qt7e31htybD9A9uPFYqH7+3s9PT1pNBo1891uV6vVqrm6Tq17CFJVleI41nK5VL/fP7kfIB8OLkkSRVHUupqm06k6nc7ZT/EhSAhBWZap0+mctd+PBTnW396Cj7+u/rVja/A/hAD5LgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBm/QJ7sycEPKoJDQAAAABJRU5ErkJggg==" alt="...">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Media top</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
      </div>
    </div>

    <div class="spacing-bottom">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAChklEQVR4nO3X0U7iQACFYd//CSS2VgtESUm0GARSIQQoSjvvdPZisbHsImRjssf4X/whMxczZL52AhchBJFPF//7CxAg1gFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZlmC1HV91txXrPtVa397kM1moyiKNJvNmrmqqnR3d6c0TbXZbJr5oiiUJInyPD9r7TRNlWVZay7PcyVJoqIoTu73I0FCCHp4eGiBzOdzZVmm5+fn1uGnaaqyLBXHsaqqauZfX19bn4frvI93u52ur6+1Xq/V7XZP7gfIfjyZTPT4+KiiKFoHGkWR6rrWzc2NttutQvh9zfR6PQ0Ggz8O8xCkLEuladrAnNoPkP14PB4rz3O9vLxoMBg081dXVwoh6Pb2tnW1jEYjXV5earlcfgry/mbsdjtFUXRyP0D24+l02jyxw+GwmY/jWHVdK0mS5nqq61p5nqssS43H409B3t+Qt7e31htybD9A9uPFYqH7+3s9PT1pNBo1891uV6vVqrm6Tq17CFJVleI41nK5VL/fP7kfIB8OLkkSRVHUupqm06k6nc7ZT/EhSAhBWZap0+mctd+PBTnW396Cj7+u/rVja/A/hAD5LgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBm/QJ7sycEPKoJDQAAAABJRU5ErkJggg==" alt="...">
          </a>
        </div>
        <div class="media-body media-middle">
          <h4 class="media-heading">Media middle</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
      </div>
    </div>

    <div class="spacing-bottom">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAChklEQVR4nO3X0U7iQACFYd//CSS2VgtESUm0GARSIQQoSjvvdPZisbHsImRjssf4X/whMxczZL52AhchBJFPF//7CxAg1gFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZlmC1HV91txXrPtVa397kM1moyiKNJvNmrmqqnR3d6c0TbXZbJr5oiiUJInyPD9r7TRNlWVZay7PcyVJoqIoTu73I0FCCHp4eGiBzOdzZVmm5+fn1uGnaaqyLBXHsaqqauZfX19bn4frvI93u52ur6+1Xq/V7XZP7gfIfjyZTPT4+KiiKFoHGkWR6rrWzc2NttutQvh9zfR6PQ0Ggz8O8xCkLEuladrAnNoPkP14PB4rz3O9vLxoMBg081dXVwoh6Pb2tnW1jEYjXV5earlcfgry/mbsdjtFUXRyP0D24+l02jyxw+GwmY/jWHVdK0mS5nqq61p5nqssS43H409B3t+Qt7e31htybD9A9uPFYqH7+3s9PT1pNBo1891uV6vVqrm6Tq17CFJVleI41nK5VL/fP7kfIB8OLkkSRVHUupqm06k6nc7ZT/EhSAhBWZap0+mctd+PBTnW396Cj7+u/rVja/A/hAD5LgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBm/QJ7sycEPKoJDQAAAABJRU5ErkJggg==" alt="...">
          </a>
        </div>
        <div class="media-body media-bottom">
          <h4 class="media-heading">Media bottom</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
      </div>
    </div>

### Embed

    @example
    <div class="embed-responsive">
      <iframe src="https://player.vimeo.com/video/23237102?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>

### Grid

All columns need the ```.col```
class. Their width can be set using a modifier class (e.g. ```.col-md-6```).

    @example
    <div class="row">
      <div class="col col-xs-8"><div class="col__item">.col-xs-8</div></div>
      <div class="col col-xs-4"><div class="col__item">.col-xs-4</div></div>
    </div>

    <div class="row">
      <div class="col col-xs-4"><div class="col__item">.col-xs-4</div></div>
      <div class="col col-xs-8"><div class="col__item">.col-xs-8</div></div>
    </div>

    <div class="row">
      <div class="col col-xs-6"><div class="col__item">.col-xs-6</div></div>
      <div class="col col-xs-6"><div class="col__item">.col-xs-6</div></div>
    </div>

    <div class="row">
      <div class="col col-xs-4"><div class="col__item">.col-xs-4</div></div>
      <div class="col col-xs-4"><div class="col__item">.col-xs-4</div></div>
      <div class="col col-xs-4"><div class="col__item">.col-xs-4</div></div>
    </div>

    <div class="row">
      <div class="col col-sm-3"><div class="col__item">.col-sm-3</div></div>
      <div class="col col-sm-3"><div class="col__item">.col-sm-3</div></div>
      <div class="col col-sm-3"><div class="col__item">.col-sm-3</div></div>
      <div class="col col-sm-3"><div class="col__item">.col-sm-3</div></div>
    </div>


### Grid Offset

    @example
    <div class="row">
      <div class="col col-xs-5"><div class="col__item">.col-xs-5</div></div>
      <div class="col col-xs-5 col-xs-offset-2"><div class="col__item">.col-xs-5.col-xs-offset-2</div></div>
    </div>

### Grid Push / Pull

    @example
    <div class="row">
      <div class="col col-xs-6 col-xs-push-6"><div class="col__item">.col-xs-6.col-xs-push-6</div></div>
      <div class="col col-xs-6 col-xs-pull-6"><div class="col__item">.col-xs-6.col-xs-pull-6</div></div>
    </div>


## Components

### Form

    @example
    <form>
      <div class="row form-group">
        <div class="col col-md-2">
          <label class="label-inline" for="username">Username</label>
        </div>
        <div class="col col-md-4">
          <input id="username" type="text">
        </div>
      </div>

      <div class="row form-group">
        <div class="col col-md-2">
          <label class="label-inline" for="password">Password</label>
        </div>
        <div class="col col-md-4">
          <input id="password" type="password">
        </div>
      </div>

      <div class="row form-group">
        <div class="col col-md-4 col-md-offset-2">
          <input class="btn" type="submit" value="Login">
        </div>
      </div>
    </form>

    <form>
      <div class="row">
        <div class="col col-md-6">
          <div class="form-group">
            <label for="firstname">First name</label>
            <input id="firstname" type="text" placeholder="Enter first name">
          </div>
        </div>
        <div class="col col-md-6">
          <div class="form-group">
            <label for="lastname">Last name</label>
            <input id="lastname" type="text" placeholder="Enter last name">
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email address</label>
        <input id="email" type="text">
      </div>

      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea id="comment"></textarea>
      </div>

      <div class="form-group">
        <label for="select-1">Select</label>
        <select id="select-1">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div class="form-group">
        <div>
          <input id="checkbox-1" type="checkbox">
          <label for="checkbox-1">Checkbox 1</label>
        </div>

        <div>
          <input id="checkbox-2" type="checkbox">
          <label for="checkbox-2">Checkbox 2</label>
        </div>
      </div>

      <div class="form-group">
        <div>
          <input id="radio-1" type="radio" name="radio">
          <label for="radio-1">Radio 1</label>
        </div>

        <div>
          <input id="radio-2" type="radio" name="radio">
          <label for="radio-2">Radio 2</label>
        </div>
      </div>

      <div class="form-group">
        <label for="file">Upload File</label>
        <input id="file" type="file">
      </div>
    </form>

### Form Custom

    @example
    <div class="form-group">
      <div class="select">
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <div class="checkbox">
        <input id="checkbox-custom-1" type="checkbox">
        <label for="checkbox-custom-1">Checkbox 1</label>
      </div>

      <div class="checkbox">
        <input id="checkbox-custom-2" type="checkbox">
        <label for="checkbox-custom-2">Checkbox 2</label>
      </div>
    </div>

    <div class="form-group">
      <div class="radio">
        <input id="radio-custom-1" type="radio" name="radio">
        <label for="radio-custom-1">Radio 1</label>
      </div>

      <div class="radio">
        <input id="radio-custom-2" type="radio" name="radio">
        <label for="radio-custom-2">Radio 2</label>
      </div>
    </div>

    <div class="form-group">
      <label for="file-custom" class="btn">Upload File</label>
      <input type="file" id="file-custom" class="sr-only">
    </div>

### Button

    @example
    <div class="form-group">
      <a class="btn" href="#" role="button">Anchor button</a>
      <button class="btn" type="submit">Button element</button>
      <input class="btn" type="button" value="Button input">
      <input class="btn" type="submit" value="Submit input">
    </div>

    <div class="form-group">
      <a class="btn disabled" href="#" role="button">Anchor button</a>
      <button class="btn" type="submit" disabled>Button element</button>
      <input class="btn" type="button" value="Button input" disabled>
      <input class="btn" type="submit" value="Submit input" disabled>
    </div>

### Table

    @example
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Division 1</td>
          <td>Division 2</td>
          <td>Division 3</td>
        </tr>
      </tbody>
    </table>


## Utilities

### Position

    @example
     <img class="block-center" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAChklEQVR4nO3X0U7iQACFYd//CSS2VgtESUm0GARSIQQoSjvvdPZisbHsImRjssf4X/whMxczZL52AhchBJFPF//7CxAg1gFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZlmC1HV91txXrPtVa397kM1moyiKNJvNmrmqqnR3d6c0TbXZbJr5oiiUJInyPD9r7TRNlWVZay7PcyVJoqIoTu73I0FCCHp4eGiBzOdzZVmm5+fn1uGnaaqyLBXHsaqqauZfX19bn4frvI93u52ur6+1Xq/V7XZP7gfIfjyZTPT4+KiiKFoHGkWR6rrWzc2NttutQvh9zfR6PQ0Ggz8O8xCkLEuladrAnNoPkP14PB4rz3O9vLxoMBg081dXVwoh6Pb2tnW1jEYjXV5earlcfgry/mbsdjtFUXRyP0D24+l02jyxw+GwmY/jWHVdK0mS5nqq61p5nqssS43H409B3t+Qt7e31htybD9A9uPFYqH7+3s9PT1pNBo1891uV6vVqrm6Tq17CFJVleI41nK5VL/fP7kfIB8OLkkSRVHUupqm06k6nc7ZT/EhSAhBWZap0+mctd+PBTnW396Cj7+u/rVja/A/hAD5LgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBmAWIWIGYBYhYgZgFiFiBm/QJ7sycEPKoJDQAAAABJRU5ErkJggg==" alt="...">

### Float / Clearfix

    @example
    <div class="clearfix">
      <div class="pull-left">
        Float Left
      </div>
      <div class="pull-right">
        Float Right
      </div>
    </div>

### Text

    @example
    <p class="text-left">Text left</p>
    <p class="text-center">Text left</p>
    <p class="text-right">Text left</p>

### Visibility

    @example
    <div class="visible-xs">Visible only on the xs breakpoint</div>
    <div class="visible-sm">Visible only on the sm breakpoint</div>
    <div class="visible-md">Visible only on the md breakpoint</div>
    <div class="visible-lg">Visible only on the lg breakpoint</div>
    <div class="visible-xl">Visible only on the xl breakpoint</div>

    <br>

    <div class="visible-xs-up">Visible from the xs breakpoint</div>
    <div class="visible-sm-up">Visible from the sm breakpoint</div>
    <div class="visible-md-up">Visible from the md breakpoint</div>
    <div class="visible-lg-up">Visible from the lg breakpoint</div>

### Screenreader

The ```.sr-only```
 class visually hides content. With the additional ```.sr-only-focusable```
 class content becomes visible once focused (for sighted keyboard users).

    @example
    <a class="sr-only sr-only-focusable" href="#main-content">Skip to main content</a>
