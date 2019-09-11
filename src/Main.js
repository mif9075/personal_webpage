import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Talks from './Talks'
import Blog from './Blog'
import Resume from './Resume'
import Contact from './Contact'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/talks' component={Talks}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main