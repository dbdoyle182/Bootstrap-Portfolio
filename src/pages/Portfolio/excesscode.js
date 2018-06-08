<br /> <br />

                <div className='row'>
                    
                    <div className='col-md-12 text-center'>
                        <h1 className='title'>Solo Projects</h1>
                        <Carousel 
                        url={this.state.solo.url}
                        gif={this.state.solo.gif}
                        github={this.state.solo.github}
                        name={this.state.solo.name}
                        description={this.state.solo.description}
                        />
                    </div>

                </div>
                <br />
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='container'>
                            <div className='row'>
                                <div className='btnContainer col-sm-6 col-md-6'>
                                    <button onClick={this.decrementSolo.bind(this)} className='btn btnPosition btn-secondary'>
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                </div>
                                <div className='btnContainer col-sm-6 col-md-6'>
                                    <button onClick={this.incrementSolo.bind(this)} className='btn btnPosition btn-secondary'>
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>