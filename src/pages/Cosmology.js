import Footer from "./Footer.js";

const Cosmology = () => {
  return (
  
        <div class="page">
            
            <div class="content">
            
                <div class="cosmology-block">
                    <div class="cosmology-header">
                        <h2>What is cosmology?</h2>
                    </div>
                    <div class="cosmology-content">
                        Cosmology is the study of the universe holistically. In other words, the birth of the universe, how it evolves, what's in it, and where it's going. From the Big Bang to the end of the universe cosmology covers it all. 
                        The most notable areas of research are the study of galaxy clusters and voids, the Big Bang, the Hubble Flow, and dark matter and energy.
                    </div>
                </div>
                <div class="cosmology-block">
                    <div class="cosmology-header">
                        <h2>The Big Bang Theory</h2>
                    </div>
                    <div class="cosmology-content">
                        This theory was settled on after the Great Debate. This debate was if the universe was static in matter/energy density. This means that the universe would be expanding, but more matter would be created to fill in the empty space.
                        Edwin Hubble's observations of the expanding universe led to the reasoning that the universe must have expanded from something. A misconception is that the universe was nothing and the exploded into everything, when in reality the theory 
                        just says that a long time ago (13.8 billion years) the universe was just super small and then began expanding. The universe was always there, just smaller.
                    </div>
                </div>    
                <div class="cosmology-block">
                    <div class="cosmology-header">
                        <h2>A little on dark matter</h2>
                    </div>
                    <div class="cosmology-content">
                        Dark matter is perhaps the most perplexing thing in cosmology. The evidence comes from the fact that spiral galaxies spin much faster than they should at the edges, meaning more matter must be enclosed to increase the force of gravity on the outer 
                        parts of the galaxy. Gravitational lensing and dynamics have bolstered the evidence that dark matter actually exists, as what is observed could not have happened without extra invisible mass. Interestingly, dark matter makes up 27% of the universe's energy and normal 
                        matter that we can see makes up only 4%. The rest is then dark energy. The most likely candadite for darm matter are WIMPs, or weakly interacting massive particles. These particles have mass, but dont interact with matter very well. The most common conjecture is that 
                        neutrinos are dark matter, but there is no conclusive evidence.
                    </div>
                </div>    
                
            </div>
            
            <Footer />
            
        </div>
  

  
  );
};

export default Cosmology;